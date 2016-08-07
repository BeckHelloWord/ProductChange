var demo = {
    doFun: function () {
        this.demoSth();
    },
    demoSth: function () {
        // 初始化
        var i = 0, count = 5,smallFlg=0;
            bigImg = $(".big-ui"),
            smallImg = $(".small-ui"),
            imgL = bigImg.find("li").length,
            bigW = bigImg.find("li").outerWidth(true),
            smallW = smallImg.find("li").outerWidth(true);

        bigImg.css("width", imgL * bigW);
        smallImg.css("width", imgL * smallW);

        var roll = function (type) {
            //判断是否动画中
            if(!bigImg.is(":animated")&&!smallImg.is(":animated")){

                if (type) {
                    ++i;
                } else {
                    --i;
                }

                i=i>imgL-1?0:i; //右点击
                i=i<0?imgL-1:i; //左点击

                bigImg.animate({"left": -(bigW * i)}, 300);

                smallFlg=i-count>=0?i-(count-1):0;
                smallImg.animate({"left": -(smallW * smallFlg)}, 300);
                smallImg.find("li").eq(i).addClass("cur").siblings("li").removeClass("cur");
            }


        }

        //下一张
        $(".next,.s-next").on("click", function () {
            // ++i;
            roll(true)
        });

        //上一张
        $(".prev,.s-prev").on("click", function () {
            // --i;
            roll(false)
        });


    }
};
