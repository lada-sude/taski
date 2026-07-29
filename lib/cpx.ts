import md5 from "md5";

const CPX_APP_ID = "34614";

export function getCPXUrl({
  userId,
  username = "",
  email = "",
}: {
  userId: string;
  username?: string;
  email?: string;
}) {
  const secureHash = md5(
    `${userId}-${process.env.CPX_SECURE_HASH}`
  );

  const params = new URLSearchParams({
    app_id: CPX_APP_ID,
    ext_user_id: userId,
    secure_hash: secureHash,
    username,
    email,
  });

  return `https://offers.cpx-research.com/index.php?${params.toString()}`;
}