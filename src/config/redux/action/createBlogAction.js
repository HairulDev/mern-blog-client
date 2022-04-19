import {Post, Update} from '../../../api';

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue}
}

export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);

    Post(data)
    .then(res => {
      console.log('sukses post: ', res);
    })
    .catch(err => {
      console.log('err post: ', err);
    })
}

export const updateToAPI = (form, id) => {
  const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);

    Update(id, data)
    .then(res => {
      console.log('sukses update: ', res);
    })
    .catch(err => {
      console.log('err update: ', err);
    })
}