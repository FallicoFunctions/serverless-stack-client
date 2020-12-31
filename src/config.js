const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51I0dliI0icWT7OX9PnvfLWW7LKLgVtdi5axdP4nKLNfbYn5E0u36Xxheq1DxnoxxzVNUz8C5J7WebXdQajcLe0Km00vTxrVMpt",

  s3: {
    REGION: "us-east-1",
    BUCKET: "fallico-notes-app",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://p03wbxnemf.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_HcO7KkwsU",
    APP_CLIENT_ID: "em7e43gha4gnd6lt21o8t9ukk",
    IDENTITY_POOL_ID: "us-east-2:b1bc0523-7b3a-433c-89ce-251728609e75",
  },
};

export default config;