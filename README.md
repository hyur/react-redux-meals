
### ★★★继续优化中。。。

### 项目说明：
使用create-react-app快速构建的React+Redux应用，该应用实现了一个简易版的订餐功能

### 环境参数：
- 技术语言 — HTML、CSS、JavaScript★★★★★★★
- 技术栈   — React16.3.2 + redux4.0.0 + react-redux5.0.7 + ES6
- 环境配置 — NodeJS 
- 开发环境 —不限


### 环境部署：
- clone本项目，安装依赖 npm install
- 开启前端服务  npm start  可以在端口3000上访问


### Redux的核心
- 核心是：action，reduce和store
- 三者关系： store保存着应用的状态，但是store要获取状态，就要使用reducer。要使状态进行变更，就要派遣一个action，这个action会传递给reducer，然后由reducer更新store的状态
- store是单一数据源，位于应用的全局状态中。
- action 是一个包括type属性的对象。相当于自定义事件，描述应该更新应用状态的任何事件。
- reducer就是一个接受两个参数的纯函数。作用：接受当前状态state和派遣的action，根据接受到的action动作将当前的状态，变成新状态并返回。


### react-redux最主要的部分
- 作用：借助react-redux内的Provider组件和connect()方法，最大的优势的实现可以直接react组件内派遣action和访问Redux store
- Provider作用：将数据从store传递给任何需要数据的React组件
- connect()作用：利用柯里化的技巧，使组件获取数据并从Redux store进行派遣。
  * 语法：connect(mapStateToProps, mapDispatchToProps)(MyComponent)
  * mapStateToProps指定你希望将哪些数据传递给React组件，需要一个state参数，并返回一个对象，组件可以从props中获取到。
  * mapDispatchToProps是可选的，连接组件后，组件自动传入到dispatch()方法中，这个就是把action creator封装起来


### 主功能及视图：

- 主界面

<img src="https://github.com/hyur/react-redux-meals/blob/master/images/index.png" width="750px" height="334px"/>

- 搜索界面
<img src="https://github.com/hyur/react-redux-meals/blob/master/images/search.png" width="750px" height="334px"/>

- 加载界面
<img src="https://github.com/hyur/react-redux-meals/blob/master/images/longing.png" width="750px" height="334px"/>

- 餐饮显示界面
<img src="https://github.com/hyur/react-redux-meals/blob/master/images/meal.png" width="750px" height="334px"/>

- 选择餐界面
<img src="https://github.com/hyur/react-redux-meals/blob/master/images/searchedMeal.png" width="750px" height="334px"/>

- 成分界面
<img src="https://github.com/hyur/react-redux-meals/blob/master/images/ingredient.png" width="750px" height="334px"/>













