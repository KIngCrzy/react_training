import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    // static jsonp(options) {
    //     return new Promise((resolve, reject) => {
    //         JsonP(options.url, {
    //             param: 'callback'
    //         }, function (err, response) {
    //             if (response.status == 'success') {
    //                 resolve(response);
    //             } else {
    //                 reject(response.messsage);
    //             }
    //         })
    //     })
    // }

    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
        }
        let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || '',
                async: false,
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                }
                if (response.status == '200') {
                    let res = response.data;
                    if (res.code == '0') {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data);
                }
            })
                .catch((error => {
                    console.log(error);

                }))
        });
    }
}