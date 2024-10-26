function Footer() {
  return (
    <footer className="mt-auto flex justify-between bg-neutral-900 px-8 py-8 text-sm text-white">
      <span>2022 &copy;Decollaborator</span>
      <nav>
        <ul className="flex list-none justify-between gap-6">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
