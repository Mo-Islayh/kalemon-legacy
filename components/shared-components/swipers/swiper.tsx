"use client";
import React, {
  useRef,
  useCallback,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  History,
  Grid,
} from "swiper/modules";
import CustomPaginationBullet from "./bullet-type/paginationBullet";
import CirclePaginationBullet from "./bullet-type/circle-pagination-bullet";
import LoadingBullet from "./bullet-type/loading-bullet";
import classNames from "classnames";
import { useRouter } from "next/router";
const SwiperInstance = ({
  firstDataList,
  className,
  Card,
  getDataApi,
  breakpoints,
  hideCardButton,
  rows,
  paginationType,
  cardClassName,
  startPageApi,
  apiParams,
  firstCardInViewClass,
  lastCardInViewClass,
  Skeleton,
  loading,
}: any) => {
  const [swiperElements, setSwiperElements] = useState([
    ...firstDataList?.data,
  ]);
  const [currentSlide, setCurrentSlide] = useState<any>(1);
  const [transitionStart, setTransitionStart] = useState(false);
  const [totalBullets, setTotalBullets] = useState(null);

  const page_already_displayed = useRef<any>({ 1: true });
  const swiperRef = useRef<any>(null);
  const stopRequestDataRef = useRef(false);
  const totalData = firstDataList?.total;

  const { locale } = useRouter();

  // devide slides based on number of rows
  const slides = [];
  for (let i = 0; i < swiperElements.length; i += rows ? rows : 1) {
    const slideCards = swiperElements.slice(i, i + (rows ? rows : 1));
    slides.push(slideCards);
  }

  // Divide the slides based on the number of rows
  const skeletonArray = [];
  for (let i = 0; i < 6; i++) {
    const skeletonCard = [];
    for (let j = 0; j < (rows ? rows : 1); j++) {
      skeletonCard.push(i + j);
    }
    skeletonArray.push(skeletonCard);
  }

  // helpers
  const onNextSwipeCallBack = useCallback(async () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext(); // Programmatically go to the next slide
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const onPrevSwipeCallBack = useCallback(async () => {
    if (swiperRef.current) {
      swiperRef.current?.slidePrev(); // Programmatically go to the prev slide
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    // request more data when slide
    if (
      !page_already_displayed.current[currentSlide] &&
      !stopRequestDataRef.current
    ) {
      const getTheDataOfCurrentSlide = async () => {
        page_already_displayed.current[currentSlide] = true;
        const params = {
          page: currentSlide + (startPageApi ? startPageApi - 1 : 0),
          ...apiParams,
        };
        const { data, to, total } = await getDataApi(params);
        data && setSwiperElements([...swiperElements, ...data]);
        to === total || !to ? (stopRequestDataRef.current = true) : null;
      };
      getTheDataOfCurrentSlide();
    }
  }, [currentSlide]);

  useLayoutEffect(() => {
    if (firstDataList?.data) {
      // variables to start from beginnig
      page_already_displayed.current = { 1: true };
      setCurrentSlide(1);
      swiperRef.current?.slideTo(0);

      // set the data on the swiper element
      setSwiperElements([...firstDataList.data]);
      firstDataList.to === firstDataList.total || !firstDataList.to
        ? (stopRequestDataRef.current = true)
        : (stopRequestDataRef.current = false);
    }
  }, [firstDataList]);

  // set the number of bullets in first blueprint
  useEffect(() => {
    if (swiperRef.current) {
      const totalBullets: any = Math.ceil(
        totalData && swiperRef.current?.params.slidesPerView
          ? totalData /
              (swiperRef.current?.params.slidesPerView * (rows ? rows : 1))
          : 0,
      );
      setTotalBullets(totalBullets);
    }
  }, [swiperRef.current, totalData]);

  const handleSwiperByKeyboard = (keyCode: any) => {
    if (
      ((keyCode === 37 && locale === "ar") ||
        (keyCode === 39 && locale === "en")) &&
      // @ts-ignore
      currentSlide < totalBullets
    ) {
      setCurrentSlide(currentSlide + 1);
    } else if (
      ((keyCode === 39 && locale === "ar") ||
        (keyCode === 37 && locale === "en")) &&
      currentSlide > 1
    ) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchEnd = (e: any) => {
    // Handle touch end event
    console.log(currentIndex === e.activeIndex);
    setCurrentIndex(e.activeIndex);

    if (currentIndex === e.activeIndex) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    // if (e.activeInde < currentIndex) setCurrentSlide(currentSlide + 1);
  };
  return (
    <>
      <Swiper
        // onTouchEnd={handleTouchEnd}
        keyboard={true}
        onKeyPress={(e, keyCode) => handleSwiperByKeyboard(keyCode)}
        speed={750}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }} // Store the Swiper instance in the ref
        modules={[Navigation, Pagination, Mousewheel, Keyboard, History, Grid]}
        className={className}
        onTransitionStart={() => setTransitionStart(true)}
        onTransitionEnd={() => setTransitionStart(false)}
        spaceBetween={30}
        draggable={false}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1240: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          ...breakpoints,
        }}
        onBreakpoint={() => {
          // change the number of bullet every change in number of slides in view
          const totalBullets: any = Math.ceil(
            totalData && swiperRef?.current?.params?.slidesPerView
              ? totalData /
                  (swiperRef?.current?.params?.slidesPerView *
                    (rows ? rows : 1))
              : 0,
          );
          setTotalBullets(totalBullets);
        }}
      >
        {loading
          ? skeletonArray.map((skeleton, skeletonIndex) => (
              <SwiperSlide key={skeletonIndex}>
                <div className="flex h-[90%] my-0 flex-col">
                  {skeleton.map((ele, ind) => {
                    return <Skeleton key={ind} />;
                  })}
                </div>
              </SwiperSlide>
            ))
          : slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex h-[90%] my-0 flex-col">
                  {slide.map((ele, cardIndex) => {
                    const cardKey = slideIndex * (rows ? rows : 1) + cardIndex;
                    const isFirstCardInView = cardIndex === 0;
                    const isLastCardInView = cardIndex === slide.length - 1;

                    return (
                      <Card
                        key={cardKey}
                        hideCardButton={hideCardButton}
                        cardData={ele}
                        className={classNames(cardClassName, {
                          [firstCardInViewClass]: isFirstCardInView,
                          [lastCardInViewClass]: isLastCardInView,
                        })}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      {loading && <LoadingBullet totalBullets={totalBullets} />}
      {console.log(totalBullets)}
      {/* @ts-ignore */}
      {!paginationType && totalBullets > 0 && !loading && (
        <CustomPaginationBullet
          totalBullets={totalBullets}
          onNextClick={onNextSwipeCallBack}
          onPrevClick={onPrevSwipeCallBack}
          currentSlide={currentSlide}
          transitionStart={transitionStart}
        />
      )}
      {/* @ts-ignore */}
      {paginationType == "circle" && totalBullets > 0 && !loading && (
        <CirclePaginationBullet
          totalBullets={totalBullets}
          onNextClick={onNextSwipeCallBack}
          onPrevClick={onPrevSwipeCallBack}
          currentSlide={currentSlide}
          transitionStart={transitionStart}
        />
      )}
    </>
  );
};

export default SwiperInstance;
