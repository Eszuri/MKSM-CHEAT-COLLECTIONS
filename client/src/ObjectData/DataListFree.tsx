const DataListSideBar = [
    {
        title: "Exp 9999+, health and energy bar max + infinite ",
        dateAdd: '27 Jun 2024',
        navigate: "/free/1",
    },
    {
        title: "Infinite Duration Brutality",
        dateAdd: '27 Jun 2024',
        navigate: "/free/2",
    },
    {
        title: "Fatality meter always full",
        dateAdd: '27 Jun 2024',
        navigate: "/free/3",
    },
    {
        title: "Fatality meter always level 3",
        dateAdd: '27 Jun 2024',
        navigate: "/free/4",
    },
    {
        title: "Unlock all platform (moves)",
        dateAdd: '27 Jun 2024',
        navigate: "/free/5",
    },
    {
        title: "Unlock door to the foundry",
        dateAdd: '27 Jun 2024',
        navigate: "/free/6",
    },
    {
        title: "Infinite Jump / fly v1",
        dateAdd: '27 Jun 2024',
        navigate: "/free/7",
    },
    {
        title: "Infinite Jump / fly v2",
        dateAdd: '27 Jun 2024',
        navigate: "/free/8",
    },
    {
        title: "Wallhack / walking through walls",
        dateAdd: '27 Jun 2024',
        navigate: "/free/9",
    },
    {
        title: "Damage Modifier",
        dateAdd: '27 Jun 2024',
        navigate: "/free/10",
    },
    {
        title: "Shang Tsung menjadi shao kahn",
        dateAdd: '27 Jun 2024',
        navigate: "/free/11",
    },
    {
        title: "subzero & scorpion replace default character",
        dateAdd: '27 Jun 2024',
        navigate: "/free/12",
    },
    {
        title: '"Test Your Might" hack duration and infinite meter',
        dateAdd: '27 Jun 2024',
        navigate: "/free/13",
    },
    {
        title: 'Brightness Modifier',
        dateAdd: '27 Jun 2024',
        navigate: "/free/14",
    },
    {
        title: 'Super Long Jump',
        dateAdd: '27 Jun 2024',
        navigate: "/free/15",
    },
    {
        title: 'Unbreakable Sword',
        dateAdd: '27 Jun 2024',
        navigate: "/free/16",
    },
    {
        title: 'Sub-Zero auto high jump',
        dateAdd: '27 Jun 2024',
        navigate: "/free/17",
    },
    {
        title: 'Change Name Character',
        dateAdd: '27 Jun 2024',
        navigate: "/free/18",
    },
    {
        title: 'Change effect color sub-zero',
        dateAdd: '27 Jun 2024',
        navigate: "/free/19",
    },
    {
        title: 'Remove Alert Tutorial',
        dateAdd: '27 Jun 2024',
        navigate: "/free/20",
    },
    {
        title: 'No Fataity Requires',
        dateAdd: '27 Jun 2024',
        navigate: "/free/21",
    },
    {
        title: 'Wallhack (moves ketika masuk portal)',
        dateAdd: '29 Jun 2024',
        navigate: "/free/22",
    },
    {
        title: 'Save Anywhere',
        dateAdd: '29 Jun 2024',
        navigate: "/free/23",
    },
];


const data = (position: number) => {
    return {
        title: DataListSideBar[position].title,
        dateAdd: DataListSideBar[position].dateAdd,
        navigate: DataListSideBar[position].navigate,
    }

};

export { data as DataListSideBar_simple }
export default DataListSideBar;