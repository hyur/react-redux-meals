
### 标注：未完，项目完善中。。。。



### 项目说明：
使用create-react-app快速构建的React+Redux应用，该应用实现了一个简易版的订餐功能

### 环境参数：
- 技术栈   — React16.3.2 + react-redux5.0.7 + ES6
- 环境配置 — NodeJS 






### 信息暂存：
- reducer 负责决定 store 的形状和初始状态以及何时派遣 action，它返回的状态将变成 store 的新状态。
- Redux 的状态存储在 Store 中。
- action 是信息载荷，描述了发生在应用中的状态更改事件。
- store 可以用来派遣 action，获取 store 的当前状态，并订阅任何更改。
### React-Redux
-  Provider组件给我们提供了一种非常方便的方式，将store传递给所有的子组件
- connect()方法，connect会返回一个被柯里化的函数
- Connect
- connect() 是一种函数，使组件能够获取数据并从 Redux store 进行派遣。语法如下所示：
- connect(mapStateToProps, mapDispatchToProps)(MyComponent)
- 提醒下，MyComponent 是接收 store 数据和/或进行派遣的组件。mapStateToProps() 是接收当前 store 和当前属性的函数，返回的内容将作为属性传递给 - MyComponent。mapDispatchToProps() 使你能够在派遣中封装 action creator。








