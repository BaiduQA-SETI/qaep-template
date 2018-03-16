import fetch from './fetch'

/**
 * 获取job列表
 * http://agroup.baidu.com/toos/md/article/427596
 */
export const getJobList = data => fetch('/job/list/?', data);
