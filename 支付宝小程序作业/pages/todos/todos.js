// 获取全局 app 实例
const app = getApp();

Page({
  // 声明页面数据
  data: {
    todos: {},
    isEmpty: false,
  },
  // 监听生命周期回调 onLoad
  onLoad() {
    // 获取用户信息并存储数据
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
        // console.log('获取用户信息成功');
      },
      () => {
        // 获取用户信息失败
        console.log('获取用户信息失败');
      }
    );

  },
  // 监听生命周期回调 onShow
  onShow() {
    this.onLoad();
    this.setData({ todos: app.todos });
    // 如果todo数据被清空则显示图标提示
    if (this.data.todos.length === 0) {
      this.setData({ isEmpty: true });
    } else {
      this.setData({ isEmpty: false });
    }
  },
  // 判断完成状态
  handleItemTap(todoindex) {
    let item = this.data.todos[todoindex];
    item.completed = !item.completed;
    this.$spliceData({
      'todos': [todoindex, 1, item],
      'app.todos': [todoindex, 1, item],
    });
  },
  // 跳转到编辑页面
  getDetail() {
    my.navigateTo({ url: '../todo-detail/todo-detail' });

  },
  // 跳转到添加页面
  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
