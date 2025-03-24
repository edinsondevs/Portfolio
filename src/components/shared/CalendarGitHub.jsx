import GitHubCalendar from "react-github-calendar";

export const CalendarGitHub = ({ year }) => (
	<GitHubCalendar
		username='edinsondevs'
		year={year}
		blockSize={15}
		blockMargin={5}
		color='#1189ec'
		fontSize={16}
	/>
);
