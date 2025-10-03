import Home from "./Home";
import CreatePost from "./CreatePost";

export{
    Home,
    CreatePost
}
/**

这个index.js的目的是，能够让许多页面都能放在同一个文件内，
然后App.jsx导入的时候只需要import ./pages就好了，不需要一个一个import，
不然显得很杂乱。 

*/