import React from "react";
import Image from "next/image";

export interface InputProps {
  status: "active" | "fill" | "default";
  type:
    | "default"
    | "code"
    | "username"
    | "email"
    | "password"
    | "normal"
    | "phone";
  theme: "light" | "dark";
  placeholder?: string;
}

export const InputField = ({
  status = "default",
  type = "default",
  theme = "light",
  placeholder = "",
}: InputProps) => {
  // Tailwind 클래스를 조합하여 스타일을 정의합니다.
  const baseClasses =
    "Body Large Semibold greyscale flex p-5 items-center gap-3 ";

  const statusClasses = {
    active:
      theme === "light" ? "active-input-field" : "dark-active-input-field",
    fill: theme === "light" ? "fill-input-field" : "dark-fill-input-field",
    default:
      theme === "light" ? "default-input-field" : "dark-default-input-field",
  };

  const inputType = type === "password" ? "password" : "text";

  return (
    <div
      className={`my-2 flex items-center gap-3 ${theme}
    `}
    >
      {type === "email" && (
        <div
          className="mr-2 ml-2
        "
        >
          <Image
            src="/Iconly/Bold/Message.svg" // `public` 폴더 안의 경로에서 시작
            alt="Email Icon"
            width={20} // 적절한 크기 설정
            height={20}
          />
        </div>
      )}

      <input
        type={inputType}
        className={`${baseClasses} ${statusClasses[status]}`}
        placeholder={placeholder === "" && type !== "default" ? type : ""}
      />
    </div>
  );
};
