import axios from "axios";

export const getTransactions = async () => {
  const { data } = await axios.get(
    `https://gist.githubusercontent.com/sverraest/7be1341f3a92391edf629c09c8749d15/raw/ee87f5c1722b9b11198a35cba5fd9d068135adf4/gistfile1.txt`
  );
  if (data && data.items && data.items.length) {
    const transactions = data.items.map((record: any) => {
      const {
        merchantId,
        amount,
        currency,
        initiatorDetails,
        created
      } = record;

      const { contactName, contactEmail } = initiatorDetails;

      return {
        merchantId,
        amount,
        currency,
        contactName,
        contactEmail,
        created
      };
    });
    return transactions;
  }
  return null;
};
