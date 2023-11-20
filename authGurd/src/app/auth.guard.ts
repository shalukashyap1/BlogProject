import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const data=localStorage.getItem('token')
  const router=inject(Router)
  if(data){
    return true;
  }else{
    alert('login first')
    router.navigate(['/'])
    return false;
  }
};
