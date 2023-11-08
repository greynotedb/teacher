"use client";

import { FC } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { CgFileDocument, CgFileAdd } from "react-icons/cg";
import { GoPersonAdd } from "react-icons/go";
import { BsArchive, BsDot, BsDashCircle } from "react-icons/bs";
import { PrimaryBadge } from "@/components/shared/Badge";
import { SecondaryBadge } from "@/components/shared/Badge";
import { MdDateRange } from "react-icons/md";

interface HomeProps {
  attendance: [
    {
      id: number;
      profileUrl: string;
      name: string;
      regNo: string;
      gender: string;
      age: number;
      present: boolean;
    }
  ];
}

interface StudentAttendanceProps {
  attendance: {
    id: number;
    profileUrl: string;
    name: string;
    regNo: string;
    gender: string;
    age: number;
    present: boolean;
  };
}

interface BirthdayCardProps {
  birthday: {
    id: number;
    date: string;
    profileUrl: string;
    name: string;
    regNo: string;
    gender: string;
    age: number;
  };
}
const StudentAttendance: FC<StudentAttendanceProps> = ({ attendance }) => {
  return (
    <Flex justifyContent={"space-between"} my={"1rem"}>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Avatar size={"sm"} src={attendance.profileUrl} />
        <Box>
          <Text fontSize={"sm"} fontWeight={"500"}>
            {attendance.name}
          </Text>
          <Flex alignItems={"flex-end"}>
            <Text color={"#747474"} fontSize={"2xs"}>
              {attendance.regNo}
            </Text>
            <Icon as={BsDot} color={"#747474"} />
            <Text color={"#747474"} fontSize={"2xs"}>
              {attendance.gender}
            </Text>
            <Icon as={BsDot} color={"#747474"} />
            <Text color={"#747474"} fontSize={"2xs"}>
              {attendance.age} Years
            </Text>
          </Flex>
        </Box>
      </Box>
      {attendance.present ? <PrimaryBadge /> : <SecondaryBadge />}
    </Flex>
  );
};

const BirthdayCard: FC<BirthdayCardProps> = ({ birthday }) => {
  return (
    <Grid
      border={"1px solid #E2E2E2"}
      rounded={"md"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"full"}
      p={"1rem"}
      transition="box-shadow 0.4s ease"
      _hover={{boxShadow:"md", backgroundColor:'#DFE8F443', pointer:'pointer', borderColor:'#FDBC5260'}}
    >
      <Avatar src={birthday.profileUrl} justifySelf={"center"} />
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {birthday.name}
      </Text>
      <Box>
        <Flex justifyContent={'center'} alignItems={"center"}>
          <Text color={"#747474"} fontSize={"0.5rem"}>
            {birthday.regNo}
          </Text>
          <Icon as={BsDot} color={"#747474"} />
          <Text color={"#747474"} fontSize={"0.5rem"}>
            {birthday.gender}
          </Text>
          <Icon as={BsDot} color={"#747474"} />
          <Text color={"#747474"} fontSize={"0.5rem"}>
            {birthday.age} Years
          </Text>
        </Flex>
        <Text fontWeight={"bold"}>{birthday.date}</Text>
      </Box>
    </Grid>
  );
};

const Home: FC<HomeProps> = ({}) => {
  const birthday = [
    {
      id: 1,
      date: "27/08/2023",
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Micheal (Adewale) Adebowale",
      regNo: "GN0230123",
      gender: "Male",
      age: 11,
    },
    {
      id: 2,
      date: "27/08/2023",
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Micheal (Adewale) Adebowale",
      regNo: "GN0230123",
      gender: "Male",
      age: 11,
    },
    {
      id: 3,
      date: "27/08/2023",
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Micheal (Adewale) Adebowale",
      regNo: "GN0230123",
      gender: "Male",
      age: 11,
    },
    {
      id: 4,
      date: "27/08/2023",
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Micheal (Adewale) Adebowale",
      regNo: "GN0230123",
      gender: "Male",
      age: 11,
    },
  ];

  const attendance = [
    {
      id: 1,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: false,
    },
    {
      id: 2,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: false,
    },
    {
      id: 3,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: true,
    },
    {
      id: 4,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: true,
    },
    {
      id: 5,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: true,
    },
    {
      id: 6,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: true,
    },
    {
      id: 7,
      profileUrl:
        "https://th.bing.com/th/id/OIP.R1WC47OEbMS_UFtDf7s22AHaI_?pid=ImgDet&rs=1",
      name: "Ajayi Samuel",
      regNo: "GN0230030",
      gender: "Male",
      age: 9,
      present: true,
    },
  ];
  return (
    <Flex w={"full"} h={"full"} display={"flex"}>
      <Box backgroundColor={"#FFF5E6"} height={"full"} width={"full"} p={5}>
        <Box
          bgImage={"/images/bgImg.png"}
          p={"0.8rem"}
          rounded={"lg"}
          display={"flex"}
          flexDir={"column"}
          gap={{ base: 10, md: 20 }}
          backgroundRepeat="no-repeat"
          backgroundSize={"contain"}
          backgroundPosition="bottom right"
          backgroundColor={"#fff"}
        >
          <Flex
            gap={2}
            width={"full"}
            display={{ base: "column", lg: "flex" }}
          >
            <Box
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.4rem"}
              display={"flex"}
              gap={2}
              my={{base:"5px", md:'0px'}}
              transition="box-shadow 0.4s ease"
              _hover={{boxShadow:"md", backgroundColor:'#fff', pointer:'pointer', borderColor:'gray.200'}}
            >
              <Box border={"1px solid #D8D8D8"} rounded={"md"} p={"0.4rem"}>
                <Avatar src="https://th.bing.com/th/id/R.93210846f887818829a3eca4c7374fd1?rik=JwoqH6qfvHIDnA&pid=ImgRaw&r=0" size={'sm'}/>
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize={"sm"}>
                  Greenfield High School
                </Text>
                <Text color={"#747474"} fontSize={"sm"}>
                  Grade 6
                </Text>
              </Box>
            </Box>
            <Box
              textAlign={"center"}
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.4rem"}
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              my={{base:"5px", md:'0px'}}
              transition="box-shadow 0.4s ease"
              _hover={{boxShadow:"md", backgroundColor:'#fff', pointer:'pointer', borderColor:'gray.200'}}
            >
              <Text fontSize={"xl"} fontWeight={"bold"}>
                32
              </Text>
              <Text fontSize={"xs"} fontWeight={"500"}>
                Students
              </Text>
            </Box>
            <Box
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.4rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              my={{base:"5px", md:'0px'}}
              transition="box-shadow 0.4s ease"
              _hover={{boxShadow:"md", backgroundColor:'#fff', pointer:'pointer', borderColor:'gray.200'}}
            >
              <Text fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>
                27/08/2023
              </Text>
            </Box>
            <Box
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.4rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              my={{base:"5px", md:'0px'}}
              transition="box-shadow 0.4s ease"
              _hover={{boxShadow:"sm", backgroundColor:'#fff', pointer:'pointer', borderColor:'gray.200'}}
            >
              <Text fontWeight={"bold"} fontSize={"xl"}>
                15:25
              </Text>
            </Box>
          </Flex>

          <Box
            gap={5}
            display={"flex"}
            flexDirection={{ base: "column", lg: "row" }}
            width={"full"}
            my={"5px"}
          >
            <Flex
              alignItems={"center"}
              gap={3}
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.8rem"}
              transition="box-shadow 0.4s ease"
              _hover={{boxShadow:"lg", backgroundColor:'#fff', pointer:'pointer', borderColor:'gray.200'}}
            >
              <Box
                border={"2px solid #8E6930"}
                background={"#FFCE83"}
                rounded={"md"}
                p={"0.5rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                transition="box-shadow 0.4s ease"
                _hover={{backgroundColor:"#fff", boxShadow:'lg'}}
              >
                <Icon as={GoPersonAdd} boxSize={"6"} color={"#8E6930"} />
              </Box>
              <Text>Register a Student</Text>
            </Flex>

            <Flex
              alignItems={"center"}
              gap={3}
              border={"1px solid #D8D8D8"}
              rounded={"md"}
              p={"0.8rem"}
             transition="box-shadow 0.4s ease"
                _hover={{backgroundColor:"#fff", boxShadow:'lg'}}
            >
              <Box
                border={"2px solid #026361"}
                background={"#95E2E2"}
                rounded={"md"}
                p={"0.5rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Icon as={CgFileAdd} boxSize={"6"} color={"#026361"} />
              </Box>
              <Text>Upload Attendance</Text>
            </Flex>
          </Box>
        </Box>

        <Box
          mt={"2rem"}
          gap={8}
          w={"full"}
          display={"flex"}
          flexDir={{ base: "column", xl: "row" }}
        >
          {/* Attendace section */}
          <Box p={"1rem"} backgroundColor={"#fff"} rounded={"lg"} w={"full"}>
            <Flex justifyContent={"space-between"}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <Icon as={BsArchive} boxSize={"4"} color={"#E4B972"} />
                <Text fontWeight={"600"} fontSize={"md"}>
                  Today's Attendance
                </Text>
              </Box>
              <Button
                backgroundColor={"transparent"}
                rounded={"md"}
                border={"1px solid #E2E2E2"}
                size={"md"}
              >
                <Text fontSize={"sm"} color={"#747474"}>
                  See All
                </Text>
              </Button>
            </Flex>

            <Divider color={"#E2E2E2"} my={"0.8rem"} />

            {/* Section for absent pupils */}
            <Box>
              <Text fontSize={"sm"} color={"#747474"}>
                Absent
              </Text>

              {attendance.map((item) =>
                item.present === false ? (
                  <StudentAttendance attendance={item} key={item.id} />
                ) : null
              )}
            </Box>

            <Divider size={"10"} />

            {/* Section for present pupils */}
            <Box>
              <Text fontSize={"sm"} color={"#747474"} mt={"1rem"}>
                Present
              </Text>

              {attendance.map((item) =>
                item.present === true ? (
                  <StudentAttendance attendance={item} key={item.id} />
                ) : null
              )}
            </Box>
          </Box>

          {/* Events section */}
          <Box p={"1rem"} backgroundColor={"#fff"} rounded={"lg"} w={"full"}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Icon as={MdDateRange} boxSize={"4"} color={"#E4B972"} />
              <Text fontWeight={"600"} fontSize={"md"}>
                Events
              </Text>
            </Box>

            <Divider color={"#E2E2E2"} my={"0.8rem"} />

            <Box>
              <Text fontSize={"sm"} color={"#747474"}>
                Birthdays this week
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  xl: "repeat(2, 1fr)",
                }}
                gap={4}
                mt={"0.5rem"}
              >
                {birthday.map((item) => {
                  return <BirthdayCard birthday={item} key={item.id} />;
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor={"#F1F1F1"} height={"full"}>
        <Box border={"1px solid #D8D8D8"} py={"2rem"} px={"1.5rem"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontWeight={"bold"}>Documents</Text>
            <Button
              color={"#747474"}
              border={"1px solid #E2E2E2"}
              backgroundColor={"transparent"}
            >
              <AiOutlinePlus />
              <Text fontWeight={"400"} mx={"0.3rem"} fontSize={"sm"}>
                Create
              </Text>
            </Button>
          </Flex>

          <Box>
            <Flex justifyContent={"space-between"} my={"1.5rem"}>
              <Flex>
                <Box
                  backgroundColor={"#FCE4BE"}
                  rounded={"sm"}
                  mr={"0.5rem"}
                  display={"flex"}
                  alignItems={"center"}
                  px={"1rem"}
                >
                  <Icon as={CgFileDocument} fontSize={"20"} />
                </Box>
                <Grid
                  justifyContent={"center"}
                  alignContent={"space-between"}
                  // w={{ base: "full", md: "15rem" }}
                >
                  <Text fontSize={"sm"} fontWeight={"bold"}>
                    Graycases
                  </Text>
                  <Text fontSize={"xs"}>
                    Contains behavioral and disciplinary actions taken on the
                    student
                  </Text>
                </Grid>
              </Flex>
              <Box
                border={"0.1rem dashed #747474"}
                w={{ base: "auto", md: "4.2rem" }}
                rounded={"md"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                px={"0.6rem"}
                gap={0}
              >
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  25
                </Text>
                <Text fontSize={"xs"} fontWeight={"bold"}>
                  Cases
                </Text>
              </Box>
            </Flex>

            <Flex justifyContent={"space-between"} my={"1.5rem"}>
              <Flex>
                <Box
                  backgroundColor={"#FCE4BE"}
                  rounded={"sm"}
                  mr={"0.5rem"}
                  display={"flex"}
                  alignItems={"center"}
                  px={"1rem"}
                >
                  <Icon as={HiOutlineDocumentText} fontSize={"20"} />
                </Box>
                <Grid
                  justifyContent={"center"}
                  alignContent={"space-between"}
                  // w={{ base: "full", md: "15rem" }}
                >
                  <Text fontSize={"sm"} fontWeight={"bold"}>
                    Results
                  </Text>
                  <Text fontSize={"xs"}>
                    Contains the academic grading of the student, after each
                    term
                  </Text>
                </Grid>
              </Flex>
              <Box
                border={"0.1rem dashed #747474"}
                rounded={"md"}
                w={{ base: "auto", md: "4.2rem" }}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                px={"0.6rem"}
                gap={0}
              >
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  32
                </Text>
                <Text fontSize={"xs"} fontWeight={"bold"}>
                  Results
                </Text>
              </Box>
            </Flex>

            <Flex justifyContent={"space-between"} my={"1.5rem"}>
              <Flex>
                <Box
                  backgroundColor={"#FCE4BE"}
                  rounded={"sm"}
                  mr={"0.5rem"}
                  display={"flex"}
                  alignItems={"center"}
                  px={"1rem"}
                >
                  <Icon as={CgFileDocument} fontSize={"20"} />
                </Box>
                <Grid
                  justifyContent={"center"}
                  alignContent={"space-between"}
                  // w={{ base: "full", md: "15rem" }}
                >
                  <Text fontSize={"sm"} fontWeight={"bold"}>
                    Notes
                  </Text>
                  <Text fontSize={"xs"}>
                    Short text used to share information between the teachers
                    and admin
                  </Text>
                </Grid>
              </Flex>
              <Box
                border={"0.1rem dashed #747474"}
                rounded={"md"}
                w={{ base: "auto", md: "4.2rem" }}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                px={"0.6rem"}
                gap={0}
              >
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  12
                </Text>
                <Text fontSize={"xs"} fontWeight={"bold"}>
                  Notes
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box h={"full"}>
          <Box
            border={"1px solid #D8D8D8"}
            py={"2rem"}
            px={"1.5rem"}
            h={"full"}
          >
            <Text fontWeight={"bold"}>Recent Actions</Text>

            <Box>
              <Flex
                my={"1.5rem"}
                border={"1px solid #E2E2E2"}
                p={"0.5rem"}
                gap={1}
                rounded={"lg"}
              >
                <Avatar src="https://th.bing.com/th/id/R.ff77632115719e1d1c6acaa1d54745a9?rik=Tlt8JV3P6lD0Dw&pid=ImgRaw&r=0" />
                <Box w={"full"}>
                  <Flex
                    justifyContent={"space-between"}
                    width={"100%"}
                    mb={"0.5rem"}
                  >
                    <Box>
                      <Text fontWeight={"600"} fontSize={"sm"} textOverflow={'ellipsis'}>
                        Tobiloba (David) Akeem
                      </Text>
                      <Text
                        color={"#B1B1B1"}
                        fontSize={"sm"}
                        fontWeight={"500"}
                      >
                        GN230062
                      </Text>
                    </Box>
                   <Box
                      backgroundColor={"#FEC4C4"}
                      h={"full"}
                      px={"1.2rem"}
                      py={"0.5rem"}
                      rounded={"full"}
                    >
                      <Text
                        fontSize={"sm"}
                        color={"#C73131"}
                        fontWeight={"600"}
                      >
                        Fees Default
                      </Text>
                    </Box>
                  </Flex>
                  <Box backgroundColor={"#fff"} width={"full"} rounded={"md"} px={{ md: "0.5rem" }} py={{ md: "0.4rem" }}>
                    <Text
                      fontSize={"md"}
                      fontWeight={"500"}
                      overflow={'hidden'}
                      lineHeight={'short'}
                      noOfLines={1}
                      textOverflow={'ellipsis'}
                    >
                      Amount Owed: ₦125,500
                    </Text>
                  </Box>
                </Box>
              </Flex>

              <Flex
                my={"1.5rem"}
                border={"1px solid #E2E2E2"}
                p={"0.5rem"}
                gap={1}
                rounded={"lg"}
              >
                <Avatar src="https://images.pexels.com/photos/1858479/pexels-photo-1858479.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                <Box w={"full"}>
                  <Flex
                    justifyContent={"space-between"}
                    width={"100%"}
                    mb={"0.5rem"}
                  >
                    <Box>
                      <Text fontWeight={"600"} fontSize={"sm"}>
                        Chioma Olumuyiwa
                      </Text>
                      <Text
                        color={"#B1B1B1"}
                        fontSize={"sm"}
                        fontWeight={"500"}
                      >
                        GN2300033
                      </Text>
                    </Box>
                    <Box
                      backgroundColor={"#FEC4C4"}
                      h={"full"}
                      px={"1.2rem"}
                      py={"0.5rem"}
                      rounded={"full"}
                    >
                      <Text
                        fontSize={"sm"}
                        color={"#C73131"}
                        fontWeight={"600"}
                      >
                        Fees Default
                      </Text>
                    </Box>
                  </Flex>
                  <Box backgroundColor={"#fff"} width={"full"} rounded={"md"} px={{ md: "0.5rem" }} py={{ md: "0.4rem" }}>
                    <Text
                      fontSize={"md"}
                      fontWeight={"500"}
                      overflow={'hidden'}
                      lineHeight={'short'}
                      noOfLines={1}
                      textOverflow={'ellipsis'}
                    >
                      Amount Owed: ₦35,000
                    </Text>
                  </Box>
                </Box>
              </Flex>

              <Flex
                my={"1.5rem"}
                border={"1px solid #E2E2E2"}
                p={"0.5rem"}
                gap={1}
                rounded={"lg"}
              >
                <Avatar src="https://daisybeattyphotography.com/wp-content/uploads/2016/10/31-3037-post/best-child-portrait-studio-nyc-daisy-beatty-684x1024.jpg" />
                <Box w={"full"}>
                  <Flex
                    justifyContent={"space-between"}
                    width={"100%"}
                    mb={"0.5rem"}
                  >
                    <Box>
                      <Text fontWeight={"600"} fontSize={"sm"}>
                        Tobiloba (David) Akeem
                      </Text>
                      <Text
                        color={"#B1B1B1"}
                        fontSize={"sm"}
                        fontWeight={"500"}
                      >
                        GN2300030
                      </Text>
                    </Box>
                    <Box
                      backgroundColor={"#FFD596"}
                      h={"full"}
                      px={"1.2rem"}
                      py={"0.5rem"}
                      rounded={"full"}
                    >
                      <Text
                        fontSize={"sm"}
                        color={"#AC7118"}
                        fontWeight={"600"}
                      >
                        Suspension
                      </Text>
                    </Box>
                  </Flex>
                  <Box backgroundColor={"#fff"} width={"full"} rounded={"md"} px={{ md: "0.5rem" }} py={{ md: "0.4rem" }}>
                    <Text
                      fontSize={"sm"}
                      fontWeight={"500"}
                      overflow={'hidden'}
                      lineHeight={'short'}
                      noOfLines={1}
                      textOverflow={'ellipsis'}
                    >
                      Samuel was given 2 weeks suspension and all i want for 
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
