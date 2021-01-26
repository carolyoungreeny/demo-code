App({
  todos: [
    { text: 'Learning Javascript', completed: true, timeline: '12/10' },
    { text: 'Learning 支付宝小程序', completed: false, timeline: '12/12' },
    { text: 'Learning 阿里前端练习生', completed: false, timeline: '12/13' },
  ],
  
  handeltodos(index, newitem, state) {
    if (state === 'text') {
      this.todos[index].text = newitem.text;
    }
    if (state === 'time') {
      this.todos[index].timeline = newitem.timeline;
    }
    if (state === 'del') {
      this.todos.splice(index, 1)
    }
    if (state === 'add') {
      this.todos.splice(this.todos.length, 0, newitem);
    }
  },

  userInfo: null,

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
});
