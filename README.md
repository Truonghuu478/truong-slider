# Give me a star on github, thank you !

## [Example](#ex)
  + ### [Single Item](#signle_item)
  +  ### [Multiple Items](#mul_item)
  +  ### [Responsive](#responsive)
  +  ### [Custom Paging](#cus_paging)
  +  ### [Auto Play](#auto_play)
  +  ### [Custom Arrows](#cus_arrow)
  +  ### [Disable Arrows](#dis_arrow)
  +  ### [Hidden Arrows](#hidden_arrow)
 
## [Configurations](#cons-configurations)

 ---
## <span id="ex">Examples  :<span>
+ ### <span id="signle_item"> Single Item </span>

```js 

import Slider from "truong-slider";

const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```


+ ###  <span id="mul_item"> Multiple items </span>

```js
import Slider from "truong-slider";

const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1//có thể thay đổi tuỳ theo số lần lặp 1 slide
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```

+ ###  <span id="responsive"> Responsive </span>

```js
import Slider from "truong-slider";

    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
                    dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          
        </Slider>
      </div>
    );
  
}
```
+ ###  <span id="cus_paging"> Custom Paging </span>

```js  
import Slider from "truong-slider";

 const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
        speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/"} />
          </div>
          <div>
            <img src={baseUrl + "/"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
          <img src={baseUrl + "/abstract03.jpg"} />
          </div>
        </Slider>
      </div>
    );
```


+ ###  <span id="auto_play"> Auto play </span>

```js
import Slider from "truong-slider";

 const settings = {
      dots: true,
        slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```


+ ###  <span id="cus_arrow">Custom Arrows </span>

```js

import Slider from "truong-slider";

 const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow:()=>{ // return content 
        return (
            <div
            className={''}
            style={{  display: "block", background: "red" }}
            onClick={onClick}
        />
               );
      },
      prevArrow:()=>{// return content 
        return (
            <div
            className={''}
            style={{  display: "block", background: "red" }}
            onClick={onClick}
        />
               );
      },
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```

+ ###  <span id="dis_arrow">Disable Arrows </span>
```js

import Slider from "truong-slider";

 const settings = {
      dots: true,
      disabledPrev:true,
	  disabledNext:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```


+ ###  <span id="hidden_arrow">Hidden Arrows </span>
  
```js

import Slider from "truong-slider";

 const settings = {
      dots: true,
      hiddenPrev:true,
	  hiddenNext:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
```




---
## <span id="cons-configurations">Configurations  :<span>

* ### arrows

```js
  + Type: Boolean
  + Default:true
  + Description: "hiện thị 2 nút next và prev"
```

* ### dots
```js
  + Type: Boolean
  + Default:true
  + Description: "hiển thị phân trang slide"
```
* ### slidesToShow
  
```js
  + Type: Number
  + Default: 3
  + Description: "slide sẽ phân tích và render theo số lượng"
  
```

* ### slidesToScroll
  
```js
  + Type: Number
  + Default: 1
  + Description: "dựa vào số lần user muốn tổng slides hiển thị bao nhiêu lần"
  
```
* ### nextArrow
  
```js
  + Type: Function
  + Default: undefined
  + Description: "điều chỉnh lại nút tiến ( đã cấu hình sự kiện)"
```
* ### prevArrow
  
```js
  + Type: Function
  + Default: undefined
  + Description: "điều chỉnh lại nút lùi ( đã cấu hình sự kiện)"
```

* ### handleSlide
  
```js
  + Type: Function
  + Default: undefined
  + Description: "Thực hiện khi di chuyển slide ( đã cấu hình sự kiện)"
```

* ### customPaging
  
```js
  + Type: Function
  + Default: undefined
  + Description: "điều chỉnh lại giao diện  nút phân trang slide (props [ event click, isActive])"
```
* ### speed
  
```js
  + Type: Number
  + Default: 500
  + Description: "tốc độ lướt slide"
```

* ### autoplay
  
```js
  + Type: Boolean
  + Default: false
  + Description: "tự động chạy slide "
```
* ### autoplaySpeed
  
```js
  + Type: Number
  + Default: 2000
  + Description: "tốc độ tự động chạy slide "
```

* ### disabledPrev
  
```js
  + Type: Boolean
  + Default: false
  + Description: "disable nút lùi"
```

* ### disabledNext
  
```js
  + Type: Boolean
  + Default: false
  + Description: "disable nút tiến "
```
* ### hiddenPrev
  
```js
  + Type: Boolean
  + Default: false
  + Description: "ẩn  nút lùi "
```
* ### hiddenNext
  
```js
  + Type: Boolean
  + Default: false
  + Description: "ẩn nút tiến "
```

* ### responsive
  
```js
  + Type: Array<{breakpoint:Number,settings:settings}>>//settings 1 new Settings()
  + Default: 
    + DESKTOP = 1024;
    + TABLET = 600;
    + MOBILE = 480;
    `[{
           breakpoint: ${DESKTOP},
           settings: {
           	slidesToShow: 3,
           	slidesToScroll: 1,
           	dots: true,
           },
           	},
           	{
           breakpoint: ${TABLET},
           settings: 
           	slidesToShow: 2,
           	slidesToScroll: 1,
           },
           	},
           	{
           breakpoint: ${MOBILE},
           settings: {
           	slidesToShow: 1,
           	slidesToScroll: 1,
           },
           	},
           ]`
  + Description: "hiện thị giao diện slide theo từng thiết bị màn hình "
```

* ### Các class Liên quan 
  
```js
 classSlideDots?: String;
 classNameDots?: String;
 classSlide?: String;
 classPrevArrow?: String;
 classNextArrow?: String;
 stylePrevArrow?: Object;
 styleNextArrow?: Object;
```