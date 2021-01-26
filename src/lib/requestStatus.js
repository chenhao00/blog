export default function requestStatus(res) {
  if (res.code === 1) {
    this.$bus.$emit('showPopup', {
      name: 'tip',
      data: res.msg
    });
  }
}
