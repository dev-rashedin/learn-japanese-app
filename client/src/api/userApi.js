import { axiosApi } from './axiosApi';
import swalAlert from './swalAlert';
import { toast } from 'react-toastify';

// create a user to the database
export const createOrUpdateUser = async (userInfo) => {
  try {
    const res = await axiosApi.put('/users', userInfo);

    if (res.data.upsertedId) {
      swalAlert('success', 'User added to the database');
    }

    if (res.data.modifiedCount) {
      toast.success('User info updated successfully');
    }
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const updateProfileInfo = async (updatedInfo, email) => {
  //console.log(updatedInfo, email)
  try {
    const res = await axiosApi.patch(`/users/${email}`, updatedInfo);

    //console.log(res.data);

    if (res.data.modifiedCount) {
      swalAlert('success', 'User profile updated successfully');
    }

    return res;
  } catch (error) {
    console.error(error);
    swalAlert('error', error.message);
    throw error;
  }
};


// post lesson info
export const postLessonInfo = async (lessonData) => {
  try {
    //console.log(lessonData)

    const res = await axiosApi.post('/lessons', lessonData);

    //console.log(res)

    if (res.data.insertedId) {
      swalAlert('success', 'lesson created successfully');
    }
  } catch (error) {
    console.error(error);
    swalAlert('error', error.message);
  }
};


// post Vocabulary info
export const postVocabularyInfo = async (vocabularyData) => {
  try {
    //console.log(vocabularyData)

    const res = await axiosApi.post('/vocabularies', vocabularyData);

    //console.log(res)

    if (res.data.insertedId) {
     toast.success('vocabulary added successfully');
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};
