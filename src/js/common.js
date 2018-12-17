const web = {
    scrollStop() {
        let mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("onscroll",mo,false);//禁止页面滑动
    },
    scrollMove() {
        let mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("onscroll",mo,false);
    },
    getStrNum(num) {
        if (typeof num !== 'number' || typeof parseInt(num) !== 'number') {
            return num;
        }
        let nums = parseInt(num),
            unit = "";
        switch (true) {
            case nums > 10000 && nums <= 100000000:
                nums = nums / 10000;
                unit = "万";
                break;
            case nums > 100000000:
                nums = nums / 100000000;
                unit = "亿";
                break;
        }
        return parseInt(nums) + unit;
    },
    getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
};


export default web;