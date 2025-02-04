'use client'
import { Button, ButtonProps, Group } from '@mantine/core';
import { TwitterIcon } from '@mantinex/dev-icons';
import { FacebookIcon } from './FacebookIcon';
import { GoogleIcon } from './GoogleIcon';
import classes from './SocialButtons.module.css';
import { handleGoogleSignIn } from '@/lib/auth/googleSignInServerAction';
import { handleFacebookSignIn } from '@/lib/auth/facebookSignInServerAction';

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button
      onClick={() => handleGoogleSignIn()}
      leftSection={<GoogleIcon />}
      variant="default"
    >
      Sign in with Google
    </Button>
  );
}

export function FacebookButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button
      onClick={() => handleFacebookSignIn()}
      leftSection={<FacebookIcon />}
      className={classes.facebookButton}
      variant="default"
    >
      Sign in with Facebook
    </Button>
  );
}

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Button
      component="a"
      href="/Login"
      leftSection={<TwitterIcon size={16} color="#00ACEE" />}
      variant="default"
    />
  );
}

const SocialButtons = () => {
  return (
    <Group justify="center" p="md">
      <GoogleButton>Continue with Google</GoogleButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
    </Group>
  );
}

export default SocialButtons;