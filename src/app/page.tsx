import React from "react";
import { InputField } from "./components/Atoms/InputField";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="flex p-5 items-center gap-3 flex-shrink-0 rounded-lg">
        {/* 이 요소는 Nunito 폰트를 사용합니다 */}
        안녕하세요, 이것은 Nunito 폰트로 표시됩니다.
      </div>
      <InputField
        status="active"
        theme="light"
        placeholder="이메일"
        type="email"
      />
    </div>
  );
}
