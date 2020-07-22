/**
 * 公共的过滤器
 * 
 * 
 */
'use strict';
import Vue from 'vue';

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
let filters = {
    /**
     * 日期过滤
     * @param {日期} date
     * @param {*日期格式} fmt yyyy-MM-dd HH:mm:ss  其中HH为24小时制,hh为12小时制
     */
    formatdate(date, fmt) {
        let bool = fmt && fmt.indexOf('HH') > 0 ? true : false;
        date = new Date(date);
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            // 'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        o[bool ? 'H+' : 'h+'] = bool ? date.getHours() : (date.getHours() > 12 ? date.getHours() - 12 : date.getHours())
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            }
        }
        return fmt;
    },
    /**
     * 内容长度过滤器
     * @param {字符串} str
     * @param {*参数} param
     */
    mzContentLimit(str, param) {
        if (str == null) {
            return ' ';
        }
        return str = str.length > param ? str.substring(0, param) + '...' : str;
    },
    /**
     * 获得文件大小
     * @param  {[num]} size [description]文件原始大小（单位是字）
     * @return {[num]}      [description]文件返回大小（单位是兆）
     */
    formaFileSize(size) {
        if (!size) return 0;
        return size = Math.ceil(parseInt(size) / 1024 / 1024) + 'M';
    }
};

/**
 * 循环遍历全局注册过滤器
 */
Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});
