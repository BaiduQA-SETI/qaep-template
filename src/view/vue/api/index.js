import fetch from './fetch'

/**
 * 
 * @param {*} cityid 
 * @param {*} value 
 */
export const searchplace = (cityid, value) => fetch('/api/typelist/', {
    // product_line : 1,
    // status : 1
});



export const getJobList = ({
    page,
    productId,
    jobId,
    jobStatus,
    startTime,
    endTime,
    resourceType,
    fuzzyRequest
}) => fetch('/job/list/?', {
    page: page,
    pagecount: 10,
    productId: productId,
    jobId: jobId,
    jobStatus: jobStatus,
    startTime: startTime,
    endTime: endTime,
    resourceType: resourceType,
    fuzzyRequest: fuzzyRequest
});
