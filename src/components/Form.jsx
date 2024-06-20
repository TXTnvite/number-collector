import { useEffect } from 'react';
import PageContent from './PageContent';

import { Outlet } from 'react-router-dom';

function AuthForm() {

  return (
    <form>
      <input type="text" name='phone-number' placeholder='(+1)123-456-7890'></input>
      <input type="name" name='verification-code' placeholder='123456'></input>  
      <input type="name" name='name' placeholder='Jiara Martins'></input>  
      <select name='calendar'>
        <options>Outlook</options>
        <options>ICal</options>
        <options>Gmail</options>
    </select>  
      <button></button>
    </form>
  );
}
export default AuthForm;
