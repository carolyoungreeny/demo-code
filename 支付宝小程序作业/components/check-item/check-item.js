Component({
  props: {
    index: 0,
    text: '',
    completed: '',
    timeline: '',
  },
  
  methods: {
    handelTap(){
      this.props.onTap(this.props.index);
    },
  },
});
