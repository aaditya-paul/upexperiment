import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 text-center text-sm text-gray-500 dark:text-gray-600">
        Made by{" "}
        <a href="dashtower.com" rel="noopener" target="_blank">
          Dashtower
        </a>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
