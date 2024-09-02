import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { BalanceChart } from "./balance-chart";

export default function BankCard() {
    return (
        <div className="flex flex-col gap-4 p-4">

            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Card 1</p>
                    <h4 className="font-bold text-large">Corporate Multi</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/large-enterprises/images/mastercard-corporate-multi-card-1280x720.jpg"
                        width={470}
                    />
                </CardBody>
            </Card>

            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Card 2</p>
                    <h4 className="font-bold text-large">Business</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://www.mastercard.fr/content/dam/public/mastercardcom/eu/fr/images/Entreprises/business-world-card.png"
                        width={470}
                    />
                </CardBody>
            </Card>

            
        </div>
    );
}
