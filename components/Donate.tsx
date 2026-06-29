
const PayPalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"/><path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"/><path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"/></g><defs><clipPath id="a"><path fill="#fff" d="M7.056 3h37.35v45H7.056z"/></clipPath></defs></svg>
);

export function Donate() {
  return (
    <a
      href="https://www.paypal.com/donate/?hosted_button_id=93PY5YGAXW728"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2.5
        px-5 py-2.5
        rounded-full
        font-semibold text-sm tracking-wide text-white
        select-none cursor-pointer
        transition-all duration-150
        shadow-md hover:shadow-lg active:shadow-sm
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009cde]
        active:scale-[0.97]
        bg-gradient-to-b from-[#009cde] to-[#0070ba]
        hover:from-[#00b0f4] hover:to-[#008fd4]
        active:from-[#007db8] active:to-[#005ea0]
      "
      aria-label="Donate with PayPal"
    >
      <PayPalIcon />
      <span>PayPal</span>
    </a>
  );
}
