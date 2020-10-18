import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 80px;
    justify-content: center;

    #profile-container {
        width: 70vw;

        #nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 40px;
            #left-arrow {
                font-size: 60px;
            }
            button {
                background: transparent;
                border: none;
            }
        }

        #person {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 150px;
            margin-top: 50px;
            img {
                width: 100px;
                border-radius: 50%;
            }

            p {
                font-size: 30px;
                margin-left: 40px;
            }
        }

        #infos {
            width: 200px;
            display: flex;
            flex-direction: column;

            margin-left: 150px;
            margin-top: 30px;

            p {
                font-size: 36px;
            }
            small {
                font-size: 18px;
            }
        }

        #content {
            display: flex;
            flex-direction: column;
            padding: 40px 20px 0px 150px;

            h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
            #news {
                border: 1px solid lightgray;
                border-radius: 0.8vh;
                padding: 10px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                background-color: white;
                width: 50vw;
                cursor: pointer;

                transition: transform 1s;

                &:hover {
                    transform: scale(1.02);
                }

                #news-image {
                    padding: 10px;
                    border: 1px solid gray;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;

                    img {
                        width: 20px;
                    }
                }
            }
        }
    }
`;
