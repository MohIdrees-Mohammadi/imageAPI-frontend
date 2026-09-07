export default function LoginRequiredCard() {
  return (
    <main
      dir="rtl"
      className="
        relative flex min-h-screen w-full items-center justify-center
        overflow-hidden bg-white
        px-5
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(70,84,255,0.07)_0%,rgba(70,84,255,0.025)_32%,transparent_68%)]
          blur-[20px]
        "
      />

      {/* Card */}
      <section
        className="
          relative z-10 flex w-full max-w-[384px]
          flex-col items-center
          rounded-[28px]
          border border-[#edf0f7]
          bg-white
          px-7 pb-[26px] pt-9
          shadow-[0_28px_65px_rgba(61,72,176,0.09),0_8px_25px_rgba(48,57,105,0.045)]
        "
      >
        {/* Top gradient line */}
        <div
          className="
            absolute left-[22px] right-[22px] top-0 h-1
            rounded-b-[5px]
            bg-gradient-to-r
            from-[#a7adff]
            via-[#4c5cf7]
            to-[#8d94ff]
          "
        />

        {/* ================= Illustration ================= */}
        <div className="relative mb-[13px] mt-[-2px] h-[145px] w-[150px]">
          {/* Outer ring */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[145px] w-[145px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border-2 border-[#4c5cf7]/[0.055]
            "
          />

          {/* Inner ring */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[105px] w-[105px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border border-[#4c5cf7]/[0.075]
            "
          />

          {/* Icon glow */}
          <div
            className="
              absolute left-[31px] top-[59px]
              h-[58px] w-[88px]
              rounded-full
              bg-[#4c5cf7]/20
              blur-[24px]
            "
          />

          {/* Main blue icon */}
          <div
            className="
              absolute left-10 top-[39px]
              z-[2] flex h-[70px] w-[70px]
              rotate-[-5deg]
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br from-[#5868ff] to-[#4352f2]
              shadow-[0_12px_22px_rgba(67,82,242,0.27)]
            "
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="rotate-[5deg]"
            >
              <path
                d="M7.5 15.3L17 7.5L26.5 15.3V26.5C26.5 27.05 26.05 27.5 25.5 27.5H8.5C7.95 27.5 7.5 27.05 7.5 26.5V15.3Z"
                stroke="white"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M13 27.2V19.5C13 18.95 13.45 18.5 14 18.5H20C20.55 18.5 21 18.95 21 19.5V27.2"
                stroke="white"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Car badge */}
          <div
            className="
              absolute left-[17px] top-[29px]
              z-[4] flex h-[43px] w-[43px]
              rotate-[4deg]
              items-center justify-center
              rounded-xl
              border border-[#eef0fa]
              bg-white
              shadow-[0_7px_18px_rgba(45,57,120,0.12),0_2px_5px_rgba(45,57,120,0.05)]
            "
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="-rotate-[4deg]"
            >
              <path
                d="M5 8.5L6.4 5.7C6.65 5.2 7.15 4.9 7.7 4.9H14.3C14.85 4.9 15.35 5.2 15.6 5.7L17 8.5"
                stroke="#4455F7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <rect
                x="3.5"
                y="8"
                width="15"
                height="7.8"
                rx="2"
                stroke="#4455F7"
                strokeWidth="1.5"
              />
              <circle cx="6.8" cy="14.2" r="1.2" fill="#4455F7" />
              <circle cx="15.2" cy="14.2" r="1.2" fill="#4455F7" />
              <path
                d="M6 10.5H16"
                stroke="#4455F7"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Login badge */}
          <div
            className="
              absolute right-[17px] top-[83px]
              z-[4] flex h-[39px] w-[39px]
              rotate-[-5deg]
              items-center justify-center
              rounded-xl
              bg-gradient-to-br from-[#ffb516] to-[#f5a400]
              shadow-[0_7px_16px_rgba(245,164,0,0.2)]
            "
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="rotate-[5deg]"
            >
              <path
                d="M9 4H5.5C4.67 4 4 4.67 4 5.5V15.5C4 16.33 4.67 17 5.5 17H9"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M10 10.5H17"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M14 7.5L17 10.5L14 13.5"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ================= Text ================= */}

        <h1
          className="
            w-full text-center
            text-[16px] font-extrabold
            leading-[1.9]
            tracking-[-0.2px]
            text-[#252b35]
          "
        >
          برای ثبت آگهی باید وارد شوید
        </h1>

        <p
          className="
            mb-[25px] mt-[7px]
            w-full text-center
            text-[12.5px] font-normal
            leading-[2.05]
            text-[#72798b]
          "
        >
          لطفاً ابتدا وارد حساب کاربری خود شوید تا بتوانید
          <br />
          مورد خود را ثبت کنید.
        </p>

        {/* ================= Primary Button ================= */}

        <button
          type="button"
          className="
            group flex h-[49px] w-full
            items-center justify-center gap-2
            rounded-[15px]
            border-0
            bg-gradient-to-br from-[#4658ff] to-[#394bf0]
            text-[13px] font-bold text-white
            shadow-[0_9px_20px_rgba(64,81,244,0.23)]
            transition-all duration-150
            hover:-translate-y-px
            hover:shadow-[0_12px_25px_rgba(64,81,244,0.30)]
            active:translate-y-0
          "
        >
          <span>ورود / ثبت‌نام</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4 10H16"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M11.5 5.5L16 10L11.5 14.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* ================= Secondary Button ================= */}

        <button
          type="button"
          className="
            mt-[10px] flex h-[49px] w-full
            items-center justify-center gap-2
            rounded-[15px]
            border border-[#e2e5ed]
            bg-white
            text-[13px] font-bold text-[#303642]
            shadow-[0_2px_4px_rgba(20,30,55,0.025)]
            transition-all duration-150
            hover:border-[#d7dbea]
            hover:bg-[#fafbff]
          "
        >
          <span>صفحه اصلی</span>

          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M3.5 8.2L9.5 3.5L15.5 8.2V15.5C15.5 16.05 15.05 16.5 14.5 16.5H4.5C3.95 16.5 3.5 16.05 3.5 15.5V8.2Z"
              stroke="#29313D"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M7.1 16.2V11.5H11.9V16.2"
              stroke="#29313D"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Divider */}
        <div className="my-[24px] h-px w-full bg-[#edf0f4]" />

        {/* ================= Status ================= */}

        <div className="flex w-full items-center justify-center gap-2">
          {/* Secure */}
          <div
            className="
              flex h-[25px] items-center justify-center
              whitespace-nowrap rounded-full
              border border-[#c9f0e5]
              bg-[#effbf7]
              px-[10px]
              text-[9.5px] font-semibold
              text-[#1ba987]
            "
          >
            <span className="ml-[5px] h-[6px] w-[6px] rounded-full bg-[#1bb891]" />
            <span>امن و رمزگذاری شده</span>
          </div>

          {/* Register */}
          <div
            className="
              flex h-[25px] items-center justify-center gap-1
              whitespace-nowrap rounded-full
              border border-[#ffe4b5]
              bg-[#fff8eb]
              px-[10px]
              text-[9.5px] font-semibold
              text-[#e99812]
            "
          >
            <span>ثبت آگهی</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7 1.5V12.5M3.5 4L7 1.5L10.5 4"
                stroke="#F59E0B"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
