const app = getApp();

Page({
  data: {},

  onBlur1(e) {
    this.inputText = e.detail.value;
  },

  onBlur2(e) {
    this.inputTime = e.detail.value;
  },
  // 添加todo
  add() {
    if (this.inputText && this.inputTime) {
      let newitem = { text: this.inputText, completed: false, timeline: this.inputTime };
      app.handeltodos(null, newitem, 'add');
      my.showToast({
        type: 'success',
        content: '添加成功',
        duration: 1000,
        success: () => {
          my.navigateBack();
        },
      });
    } else {
      my.showToast({
        type: 'exception',
        content: '请填写完毕',
        duration: 1000,
      });
    }
  },

});
