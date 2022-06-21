export default (to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        const token = localStorage.getItem('token');
        if (token != 'null') {
          next();
        } else {
            localStorage.setItem('token', null);
            localStorage.setItem('user', null);
            next('/')
        }
    } else {
      next()
    }
  }