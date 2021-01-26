const app = getApp();

Page({
  data: {
    todoDetails: {},
    isEmpty: false,
  },
  onLoad() {
    this.setData({ todoDetails: app.todos });
    if (this.data.todoDetails.length === 0) {
      this.setData({ isEmpty: true});
    }
  },
  // 修改todo的文本内容
  textChange(e) {
    let text = e.detail.value;
    let index = e.target.dataset.index;
    let Item = this.data.todoDetails[index];
    let item = { text };
    // 判断用户是否有修改内容
    if (Item.text === item.text) {
      return;
    } else {
      app.handeltodos(index, item, 'text');
      my.showToast({
        type: 'success',
        content: '修改成功',
        duration: 1000,
      });
    }

  },
  // 修改todo的时间
  timelineChange(e) {
    let timeline = e.detail.value;
    let index = e.target.dataset.index;
    let Item = this.data.todoDetails[index];
    let item = { timeline };
    // 判断用户是否有修改内容
    if (Item.timeline === item.timeline) {
      return;
    } else {
      app.handeltodos(index, item, 'time');
      my.showToast({
        type: 'success',
        content: '修改成功',
        duration: 1000,
      });
    }
  },
  // 删除todo
  todoDel(e) {
    let index = e.target.dataset.index;
    let item = app.todos[index];
    if (item) {
      this.$spliceData({
        todoDetails: [index, 1],
      });
      app.handeltodos(index, null, 'del');
      my.showToast({
        type: 'success',
        content: '删除成功',
        duration: 1000,
        success: () => {
          if (this.data.todoDetails.length === 0){
            this.setData({ isEmpty: true});
          }
        },
      });
    }
  }
});
