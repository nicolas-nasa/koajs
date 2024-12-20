import { CognitoIdentityServiceProvider } from 'aws-sdk';

class CognitoHelper {
  private cognito: CognitoIdentityServiceProvider;
  private userPoolId: string;
  private clientId: string;

  constructor(userPoolId: string, clientId: string) {
    this.cognito = new CognitoIdentityServiceProvider();
    this.userPoolId = userPoolId;
    this.clientId = clientId;
  }

  async signUp(
    username: string,
    password: string,
    attributes: { Name: string; Value: string }[]
  ) {
    const params = {
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: attributes
    };

    try {
      const result = await this.cognito.signUp(params).promise();
      return result;
    } catch (error) {
      throw new Error(`Error signing up: ${error}`);
    }
  }

  async signIn(username: string, password: string) {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password
      }
    };

    try {
      const result = await this.cognito.initiateAuth(params).promise();
      return result;
    } catch (error) {
      throw new Error(`Error signing in: ${error}`);
    }
  }
}

export default CognitoHelper;
