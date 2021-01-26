Component({
  props: {
    isBlock: true,
    onClickEdit: () => {},
    onClickAdd: () => {},
  },

  methods: {
    onClickEdit(){
      this.props.onClickEdit();
    },
    onClickAdd() {
      this.props.onClickAdd();
    },
  },
});
