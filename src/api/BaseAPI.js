import axios from "axios";
export default class BaseAPI {
	/**
	 * Call api lấy trả về data
	 * @param {*} url 
	 * @param {*} method 
	 * @param {*} data 
	 * @returns 
	 */
    request(url = "", method = "get", data = null) {
        let me = this,
            options = {
                url: url,
                method: method,
                data: data,
            };
        return new Promise((resolve, reject) => {
            let promise = me.callRequest(options);
            promise
                .then((res) => {
                    resolve(res.data);
                })
                .catch((ex) => {
                    let cancel = axios.isCancel(ex);
                    reject(ex);
                });
        });
    }
	/**
	 * Call api lấy tất cả thông tin request
	 * @param {*} options 
	 * @returns 
	 */
    callRequest(options) {
		const me = this;

		me.processData(options);
		me.processHeader(options);

        //Khởi tạo
        const axiosApi = axios.create();

        //Xử lý timout nếu có, tạm thời chưa xử lý
        // if(timeout){
        //   axiosApi.defaults.timeout = timeout;
        // }

        const axiosPromise = new Promise((resolve, reject) => {
            axiosApi(options)
                .then((res) => {
                    resolve(res);
                })
                .catch((ex) => {
                    let cancel = axios.isCancel(ex);
                    reject(ex);
                });
        });

        return axiosPromise;
    }
	/**
	 * Xử lý header
	 * @param {*} options 
	 */
	processHeader(options) {
		const me = this;
		if(options && !options.isNotSetHeader) {
			const header = options.header || {};

			//Xử lý Authorization
			if(!header['Authorization']) {
				const token = 'hihi';
				if(token) {
					header['Authorization'] = 'Token' + token;
				}
			}

			//Xử lý content-type
			if(!header['Content-type']) {
				header['Content-type'] = 'application/json';
			}

			options.headers = header;
		}
	}

	processData(options) {

	}
}
