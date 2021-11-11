import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadAvatar, getUserName } from 'redux/auth';

const AvatarModal = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => getUserName(state));
  const [file, setFile] = useState(null);
  const [userNewName, setUserNewName] = useState(userName);

  const handleChangeAvatar = e => {
    setFile(e.target.files[0]);
  };
  const onHandleChangeName = e => {
    setUserNewName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', userNewName);
    formData.append('avatar', file);
    dispatch(uploadAvatar(formData));
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="avatar" onChange={handleChangeAvatar}></input>
      <input
        type="text"
        placeholder={userNewName}
        value={userNewName}
        name="name"
        onChange={onHandleChangeName}
      />
      <button type="submit">Загрузить</button>
    </form>
  );
};

export default AvatarModal;
