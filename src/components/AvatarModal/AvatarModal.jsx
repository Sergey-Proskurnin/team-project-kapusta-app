import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { uploadAvatar } from 'redux/auth';

const AvatarModal = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(uploadAvatar(formData));
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="avatar" onChange={handleChange}></input>
      <button type="submit">Загрузить</button>
    </form>
  );
};

export default AvatarModal;
