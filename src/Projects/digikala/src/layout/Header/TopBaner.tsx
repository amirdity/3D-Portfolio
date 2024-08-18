import haraj from "/asset/header/haraj.webp";

export default function TopBaner() {
  return (
    <a href="/">
      <picture>
        <img
          src={haraj}
          alt="حراج سر ماه"
          className=" h-[60px] w-full object-cover"
        />
      </picture>
    </a>
  );
}
