import { legacy_createStore as createStore, combineReducers, Store, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { applyMiddleware } from "redux"
import storage from "redux-persist/lib/storage"
import reduxThunk from "redux-thunk" // redux-thunk 中间件，用于处理异步操作
import reduxPromise from "redux-promise" // redux-promise 中间件，用于处理异步操作
import global from "./modules/global/reducer"
import menu from "./modules/menu/reducer"
import tabs from "./modules/tabs/reducer"
import auth from "./modules/auth/reducer"
import breadcrumb from "./modules/breadcrumb/reducer"
// 测试案例counter
import counter from "./modules/counter/reducer"

// 创建reducer(拆分reducer)
const reducer = combineReducers({
    auth,
    breadcrumb,
    global,
    menu,
    tabs,
    counter
})

// redux 持久化配置
const persistConfig = {
    key: "redux-state",
    storage: storage
}
const persistReducerConfig = persistReducer(persistConfig, reducer)

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)

// 创建 store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares))

// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
