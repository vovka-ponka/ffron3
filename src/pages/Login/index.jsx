import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import { fetchUserData, selectAuth } from '../../redux/slice/auth';

export const Login = () => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    dispatch(fetchUserData(values));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вхід до аккаунта
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          helperText={errors.email?.message}
          error={Boolean(errors.email?.message)}
          {...register('email', { required: 'Вкажіть пошту' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
          label="Пароль"
          {...register('password', { required: 'Вкажіть пароль' })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Зайти
        </Button>
      </form>
    </Paper>
  );
};
