var goBack = function() {
  let obj = JSON.parse(localStorage.getItem('current'));
  this.$router.push(obj.router_no_found);
}
export default goBack;