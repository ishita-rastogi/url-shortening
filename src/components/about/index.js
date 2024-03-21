import style from "./about.module.css";

export default function About() {
	return (
		<div className={style.about}>
			<a
				href="https://github.com/ishita-rastogi/url-shortening"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className={style.github}
					src="/github-logo-light.png"
					alt="React URL Shortening"
					title="Ishita"
				/>
			</a>
		</div>
	);
}
