import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import BaseLayout from '../views/layout/BaseLayout'

/**
 * 所有权限通用路由表
 * 如首页和登录页和一些不用权限的公用页面配置在这里
 * 配置详情
  hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
  redirect: noredirect           当设置 noredirect 的时候该路由不会在面包屑导航中出现
  name:'router-name'             设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
  meta : {
    role: ['admin','editor']     设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/updataPassword', component: _import('login/UpdataPassword/index'), hidden: true },
  { path: '/resetPassword', component: _import('login/ResetPassword/index'), hidden: true },
  { path: '/registerQuer', component: _import('login/RegisterQuer/index'), hidden: true },
  { path: '/register', component: _import('login/Register/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/agencyimport', component: _import('institutionalusermanagement/usermanagement/agencyimport/index'), hidden: true },
  // { path: '/replyFileOfficial', component: _import('businessManage/fileOfficial/replyFileOfficial'), hidden: true },

  {
    path: '',
    component: BaseLayout,
    redirect: 'dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      meta: { title: 'dashboard', icon: 'home' }
    }]
  }
]

// 实例化vue的时候只挂载constantRouter
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

/**
 * 具有权限控制的菜单放在这里
 */
export const asyncRouterMap = [
  /* {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { role: ['admin'] },
    children: [{
      path: 'index',
      component: _import('permission/index'),
      name: 'permission',
      meta: {
        title: 'permission',
        icon: 'lock',
        role: ['admin']
      }
    }]
  },*/

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/complex-table',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: '/table',
        component: _import('table/index'),
        redirect: 'table/complex-table',
        name: 'Table',
        meta: {
          title: 'Table',
          icon: 'table'
        },
        children: [
          { path: 'dynamic-table', component: _import('table/index'), name: 'dynamicTable', meta: { title: 'dynamicTable' }}
        ]
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: 'icons',
      meta: { title: 'icons', icon: 'icon', noCache: true }
    }]
  },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'errorPages',
  //   hidden: true,
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     { path: '401', component: _import('errorPage/401'), name: 'page401', hidden: true, meta: { title: 'page401', noCache: true }},
  //     { path: '404', component: _import('errorPage/404'), name: 'page404', hidden: true, meta: { title: 'page404', noCache: true }}
  //   ]
  // },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    hidden: true,
    children: [{ path: 'log', component: _import('errorLog/index'), name: 'errorLog', meta: { title: 'errorLog', icon: 'bug' }}]
  },
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   hidden: true,
  //   children: [{ path: 'index', component: _import('i18n-demo/index'), name: 'i18n', meta: { title: 'i18n', icon: 'international' }}]
  // },
  {
    path: '/dataSubmit',
    component: Layout,
    redirect: 'dataSubmit/onlineFill/onlineFill',
    name: '/dataSubmit',
    meta: { title: 'dataSubmit', icon: 'datasubmit' },
    children: [
      // {
      //   path: 'onlineFillManage', // 在线填报-在线填报管理
      //   name: 'onlineFillManage',
      //   component: _import('dataSubmit/onlineFill/onlineFillManage'),
      //   meta: { title: 'onlineFillManage', icon: 'form' }
      // },
      {
        path: 'onlineFill', // 在线填报-在线填报
        name: 'onlineFill',
        component: _import('dataSubmit/onlineFill/onlineFill'),
        meta: { title: 'onlineFill' }
      },
      {
        path: 'newBigDeals', // 新增大额
        name: 'newBigDeals',
        component: _import('dataSubmit/onlineFill/newBigDeals'),
        meta: { title: 'onlineFill' },
        hidden: true
      },
      {
        path: 'fillWays', // 在线填报-在线填报管理-选择填报方式
        name: 'fillWays',
        component: _import('dataSubmit/onlineFill/fillWays'),
        meta: { title: 'fillWays', icon: 'form' },
        hidden: true
      },
      {
        path: 'fillCheck', // 在线填报-在线填报管理-查看
        name: 'fillCheck',
        component: _import('dataSubmit/onlineFill/fillCheck'),
        meta: { title: 'fillCheck', icon: 'form' },
        hidden: true
      },
      {
        path: 'pageLoading', // 页面加载-页面加载管理
        name: 'pageLoading',
        component: _import('dataSubmit/pageLoading/pageLoading'),
        meta: { title: 'pageLoading' }
      },
      {
        path: 'filePreview', // 页面加载-文件预览
        name: 'filePreview',
        component: _import('dataSubmit/pageLoading/filePreview'),
        meta: { title: 'filePreview', icon: 'form' },
        hidden: true
      },
      {
        path: 'notFound', // 页面加载-交易报文加载-详情(未报送)
        name: 'notFound',
        component: _import('dataSubmit/pageLoading/notFound'),
        meta: { title: 'notFound', icon: 'form' },
        hidden: true
      },
      {
        path: 'hadFound', // 页面加载-交易报文加载-详情(已报送)
        name: 'hadFound',
        component: _import('dataSubmit/pageLoading/hadFound'),
        meta: { title: 'hadFound', icon: 'form' },
        hidden: true
      },
      {
        path: 'newsPortManage', // 消息接口-消息接口管理
        name: 'newsPortManage',
        component: _import('dataSubmit/newsPort/newsPortManage'),
        meta: { title: 'newsPortManage' }
      },
      {
        path: 'newsPortDetail', // 消息接口-消息接口详情
        name: 'newsPortDetail',
        component: _import('dataSubmit/newsPort/newsPortDetail'),
        meta: { title: 'newsPortDetail', icon: 'tree' },
        hidden: true
      },
      {
        path: 'returnManage', // 回执管理
        name: 'returnManage',
        component: _import('dataSubmit/returnManage/returnManage'),
        meta: { title: 'returnManage' }
      },
      {
        path: 'wrongManage', // 异常管理-异常管理
        name: 'wrongManage',
        component: _import('dataSubmit/wrongManage/wrongManage'),
        meta: { title: 'wrongManage' }
      },
      {
        path: 'wrongCheck', // 异常管理-异常查看
        name: 'wrongCheck',
        component: _import('dataSubmit/wrongManage/wrongCheck'),
        meta: { title: 'wrongCheck', icon: 'tree' },
        hidden: true
      }
    ]
  },

  { // 数据补正
    path: '/dataCorrection',
    component: Layout,
    children: [
      {
        path: 'artificialCorrection',
        name: 'artificialCorrection',
        component: _import('dataCorrection/artificialCorrection'),
        meta: { title: 'artificialCorrection', icon: 'form' }
      }
    ]
  },

  { // 业务管理
    path: '/businessManage',
    component: Layout,
    name: 'businessManage',
    redirect: 'submitProfile',
    meta: { title: 'businessManage', icon: 'businessmanage' },
    children: [
      {
        path: 'submitProfile', // 报送概要
        name: 'submitProfile',
        component: _import('businessManage/submitProfile'),
        meta: { title: 'submitProfile' }
      },
      {
        path: 'fileOfficial', // 文件公函
        name: 'fileOfficial',
        component: _import('businessManage/fileOfficial/index'),
        meta: { title: 'fileOfficial' }// ,

      },
      {
        path: 'replyFileOfficial', // 文件公函--回复
        name: 'replyFileOfficial',
        component: _import('businessManage/fileOfficial/replyFileOfficial'),
        meta: { title: 'replyFileOfficial' },
        hidden: true
      },
      {
        path: 'repliedFileOfficial', // 文件公函--已回复
        name: 'repliedFileOfficial',
        component: _import('businessManage/fileOfficial/repliedFileOfficial'),
        meta: { title: 'repliedFileOfficial' },
        hidden: true
      },
      {
        path: 'noreplyFileOfficial', // 文件公函--未回复
        name: 'noreplyFileOfficial',
        component: _import('businessManage/fileOfficial/noreplyFileOfficial'),
        meta: { title: 'noreplyFileOfficial' },
        hidden: true
      },
      {
        path: 'announcement', // 通知报告
        name: 'announcement',
        component: _import('businessManage/announcement/index'),
        meta: { title: 'announcement' }
      },
      {
        path: 'notice', // 通知报告查看
        name: 'notice',
        component: _import('businessManage/announcement/notice/index'),
        meta: { title: 'announcement' },
        hidden: true
      },
      {
        path: 'noticeShareText', // 经典案例分享查看
        name: 'noticeShareText',
        component: _import('businessManage/announcement/noticeShareText/index'),
        meta: { title: 'announcement' },
        hidden: true
      },
      {
        path: 'noticeTrain', // 报送培训查看
        name: 'noticeTrain',
        component: _import('businessManage/announcement/noticeTrain/index'),
        meta: { title: 'announcement' },
        hidden: true
      },
      {
        path: 'noticeDownload', // 下载中心查看
        name: 'noticeDownload',
        component: _import('businessManage/announcement/noticeDownload/index'),
        meta: { title: 'announcement' },
        hidden: true
      },
      {
        path: 'noticeQuestion', // 常见问题查看
        name: 'noticeQuestion',
        component: _import('businessManage/announcement/noticeQuestion/index'),
        meta: { title: 'announcement' },
        hidden: true
      },
      {
        path: 'zeroReportConfirmation', // 零报告确认
        name: 'zeroReportConfirmation',
        component: _import('businessManage/zeroReportConfirmation/index'),
        meta: { title: 'zeroReportConfirmation' }
      },
      {
        path: 'customSuspiciousTrade', // 自定义可疑交易
        component: _import('businessManage/customSuspiciousTrade/index'),
        name: 'customSuspiciousTrade',
        meta: { title: 'customSuspiciousTrade' }
      },
      {
        path: 'customSuspiciousTradeDetail', // 自定义可疑交易（详情）
        name: 'customSuspiciousTradeDetail',
        component: _import('businessManage/customSuspiciousTrade/customSuspiciousTradeDtetail'),
        meta: { title: 'customSuspiciousTradeDtetail' },
        hidden: true
      },
      {
        path: 'bulkImport', // 自定义可疑交易（批量导入）
        name: 'bulkImport',
        component: _import('businessManage/customSuspiciousTrade/bulkImport'),
        meta: { title: 'bulkImport' },
        hidden: true
      },
      {
        path: 'importQuery', // 自定义可疑交易（导入查询）
        name: 'importQuery',
        component: _import('businessManage/customSuspiciousTrade/importQuery'),
        meta: { title: 'importQuery' },
        hidden: true
      },
      {
        path: 'importDetail', // 自定义可疑交易（导入详情）
        name: 'importDetail',
        component: _import('businessManage/customSuspiciousTrade/importDetail'),
        meta: { title: 'importDetail' },
        hidden: true
      },
      // 中心端
      {
        path: 'centersubmitprofile', // 自定义可疑交易（导入详情）
        name: 'CenterSubmitProfile',
        component: _import('businessManage/centersubmitprofile'),
        meta: { title: 'CenterSubmitProfile' },
        hidden: true
      }

    ]
  },

  {// 机构用户管理
    path: '/institutionalusermanagement',
    component: Layout,
    redirect: '/institutionalusermanagement/informationmaintenance',
    name: 'InstitutionalUserManagement',
    meta: { title: 'InstitutionalUserManagement', icon: 'usermanage' },
    children: [
      {
        path: 'informationmaintenance',
        name: 'InformationMaintenance',
        component: _import('institutionalusermanagement/informationmaintenance/index'),
        meta: { title: 'InformationMaintenance' }
      },
      {
        path: 'informationchange',
        name: 'InformationChange',
        component: _import('institutionalusermanagement/informationchange/index'),
        meta: { title: 'InformationChange' }
      },
      {
        path: 'userquit',
        name: 'UserQuit',
        component: _import('institutionalusermanagement/userquit/index'),
        meta: { title: 'UserQuit' }
      },
      {
        path: 'usermanagement',
        name: 'UserManagement',
        component: _import('institutionalusermanagement/usermanagement/index'),
        meta: { title: 'UserManagement' }
      },
      {
        path: 'agencyimport',
        name: 'AgencyImport',
        hidden: true,
        component: _import('institutionalusermanagement/usermanagement/agencyimport/index'),
        meta: { title: 'AgencyImport' }
      },
      {
        path: 'importresultquery',
        name: 'ImportResultQuery',
        hidden: true,
        component: _import('institutionalusermanagement/usermanagement/importresultquery/index'),
        meta: { title: 'ImportResultQuery' }
      },
      {
        path: 'branchdetail',
        name: 'BranchDetail',
        hidden: true,
        component: _import('institutionalusermanagement/usermanagement/importresultquery/branchdetail'),
        meta: { title: 'BranchDetail' }
      },
      {
        path: 'resultDetail',
        name: 'ResultDetail',
        hidden: true,
        component: _import('institutionalusermanagement/usermanagement/importresultquery/resultDetail'),
        meta: { title: 'ResultDetail' }
      }
    ]
  },

  {// 代码管理
    path: '/codeManagement',
    component: Layout,
    name: 'codeManagement',
    redirect: 'codeDownload',
    meta: { title: 'codeManagement', icon: 'codemanage' },
    children: [
      {
        path: 'codeDownload',
        name: 'codeDownload',
        component: _import('codeManagement/codeDownload'),
        meta: { title: 'codeDownload' }
      },
      {
        path: 'rateCodeDownload',
        name: 'rateCodeDownload',
        component: _import('codeManagement/rateCodeDownload'),
        meta: { title: 'rateCodeDownload' },
        hidden: true
      }
    ]
  },

  {// 系统管理
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/systemUpdateLog',
    name: 'systemManage',
    meta: { title: 'systemManage', icon: 'systemmanage' },
    children: [
      {
        path: 'systemUpdateLog',
        name: 'systemUpdateLog',
        component: _import('systemManage/systemUpdateLog'),
        meta: { title: 'systemUpdateLog' }
      },
      {
        path: 'systemUpdateLogDetail',
        name: 'systemUpdateLogDetail',
        component: _import('systemManage/systemUpdateLogDetail'),
        meta: { title: 'systemUpdateLogDetail' },
        hidden: true
      }
    ]
  },

  { // 详情页面
    path: '/detail',
    component: Layout,
    hidden: true,
    children: [{
      path: 'index/:id',
      component: _import('detail/index'),
      name: 'detail',
      meta: { title: 'detail' }
    }]
  },

  { // 列表页面
    path: '/list',
    component: Layout,
    hidden: true,
    children: [{
      path: 'index/:id',
      component: _import('list/index'),
      name: 'list',
      meta: { title: 'list' }
    }]
  },

  // 保证在最后
  { path: '*', redirect: '/404', hidden: true }
]

