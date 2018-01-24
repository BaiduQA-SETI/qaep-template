import $ from 'jquery'
// alert($)

export default async function (url = '', data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            dataType: 'json',
            data: data,
            type : type,
            success(rs) {
                resolve(rs)
            }
        });
    })
}
