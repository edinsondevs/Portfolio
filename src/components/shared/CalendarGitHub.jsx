import { Stack } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";

export const CalendarGitHub = ({ year }) => {
	// Hooks para detectar tamaño de pantalla
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	const isDesktop = useMediaQuery({ minWidth: 992 });

	// Determinar el fontSize basado en el tamaño de pantalla
	const getFontSize = () => {
		if (isMobile) return 10;
		if (isTablet) return 12;
		return 16;
	};

	return (
		<article
			style={{
				width: "auto",
				border: "2px solid var(--color-primary-blue)",
				borderRadius: "10px",
				padding: "30px",
			}}>
			<Stack gap={3}>
				<div style={{ fontSize: getFontSize() }}>
					<p style={{textDecorationLine: 'underline'}} >Colaboraciones de {year}</p>
				</div>
				<GitHubCalendar
					username='edinsondevs'
					year={year}
					blockSize={15}
					blockMargin={5}
					color='#1189ec'
					fontSize={getFontSize()}
				/>
			</Stack>
		</article>
	);
};
