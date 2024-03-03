import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: "linktree-b37d7",
      clientEmail: "firebase-adminsdk-aznsy@linktree-b37d7.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDY2SQq8/8sTui2\n43aPdelD2AO68hLYt4z/jzD2f3jXhF9uW25hi33eWD90AWAbvKDYK6u3WSpCsvnp\nmXSNf/7yX6oXOAP6Hy27UwHxwexPatOFZnUzbQ4h/Cg+xBY04P8Vz/DKX4n8C1/w\n2QJoJN8BTmPsD1Bkv24DSPOe8gOCTdKc5ESe88Vm7nyeyrnACYoWd//rRkyx1Fp0\naZ11CdnoQy4dlu98VbmKt3VWEHGO4adzhqjDikkpI0Mp3+qpmjp3s0w6eK2rda4g\nuHtK6R6WVcUHnIpuCiHpM1DhZs+EwuFF6QIwPQSjTUx6L4IiUmTBVm+wFLnuG6/3\nAtMNk2URAgMBAAECggEAO+6fqWNwVg2lEc8CGJpNExwjw8pd3Rm11Xf831PR0Tbb\nrUOF2V3VNtuLBgPPTTsv9S70saLqJC8VFTP9W5JRoyk/eFVZ/Aob+JbzhZ7EMhrj\nRQ5RPBpa+peXg+lr/cdlmOC0uyn2l/uI06cWnDP8kn7Y7Qg6fu3NeQjzlC1tPNjF\nDAHgfKdDs1dPn7i90rvJTmdd1alZjk4JJqKgmmjTmH/OZ8KYC6SinR4T1zIUUxri\nhArrQ7ydPupoj6v45Rxt4nhFiElVxz7WWAOHE877wRcu9we/lIRGkdxAz0Pxpij6\nlqzp9hUTLhcKAMFc+cnoeDCP6DIIociTnngMHThWNQKBgQD2Ua+qHj0S6sz4Yffu\noYAeBDN9Q11sRzpmk5ttyUQmeHhM1/58J73RNhoYXP+KfRtYowSYgfSui5zDsgSc\nFeqIpEQEDzwlXd7ng0pTiRbe/V7RGLwZyVGIUkuh/X7QcDR641nye/G66I6D0R3I\nVi2dUII3UDYTkCBl1U6egIk2swKBgQDhXu/Z6YuZY64IQhNurfR0XXLEFFbYpdrR\npsbDRD0EDK7Ir4pKn2RxoHWbMubDaHPQ5nOECurxN8iCPLqNNyK2jEU02spcc+kJ\n4NzurmpGRHm6tB0bQl4+SQDxwzuq/Ao2gW70ho6+VBcwAeg/bW/PZYHyoQ3i7oWb\nwH+bNn53KwKBgQCsoluns0HCvGWjv6XwzafpYbBkno4fkVxRACrzKxhkjhJiaQ+n\nHINg2bY4VRWUjlJYMQjLimle2+KnFWE9s+6IjfhNkA/rcHsFb3LsUSyCZLnLerZ6\nrCpEjMkNY4k5tSpS5nzoAg5NnSglIq7o9d1KYF6jPchotZ6/QFy1ogiJGQKBgA71\nfDoclFWEFkMaD6wjA7zNjxaQuwr6R0HvLfY8C0i/hsJvVGCLn+Ei42t/v21s+3L8\nOOKkzt9f8oEigsdox3cSbG2LsC7eyrMLJ9732Ln9RY8s8Vmj2BmOQu/JI6a/v/XK\nNZEpdUQQ1NEs7zt2ihtcA3oVUpSjfF7QMigdP9utAoGANUkW2gudxGVCoSXfl5J2\n5ml8PVZDd6Wc5GY05QF9015BWjrbdaFTXoTcYpb5dFRWpLnotgJlTq7TxzC67zXz\nzbIuR/Wzxvkkj9iiwtPyH3w3dvcm/fr9jA9qGTA7kXZfrmRMzkQCYJ/+gA2JnJQx\nYfag4isFdRrJ9pXN/Tl3hvk=\n-----END PRIVATE KEY-----\n"
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
