"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description?: string;
    items: {
        question: string;
        answer: string;
    }[];
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
    ({ className, title, description, items, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 w-full flex justify-center bg-gradient-to-b from-transparent via-muted/50 to-transparent",
                    className
                )}
                {...props}
            >
                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-medium font-jost mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-sm text-muted-foreground">{description}</p>
                        )}
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="max-w-2xl mx-auto space-y-2">
                        {items.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
    HTMLDivElement,
    {
        question: string;
        answer: string;
        index: number;
    }
>((props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { question, answer, index } = props;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className={cn(
                "group rounded-lg bg-accent-magenta/10",
                "transition-all duration-200 ease-in-out",
                "border border-border/50",
                isOpen
                    ? "bg-gradient-to-br from-background via-muted/50 to-background"
                    : "hover:bg-muted/50"
            )}
        >
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 h-auto justify-between bg-white/30 hover:bg-transparent flex items-start"
            >
                <h3
                    className={cn(
                        "text-base font-medium transition-colors duration-200 text-left",
                        "text-foreground/70",
                        "flex-1 mr-2 break-words",
                        isOpen && "text-foreground"
                    )}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "p-0.5 rounded-full flex-shrink-0 mt-1",
                        "transition-colors duration-200",
                        isOpen ? "text-primary" : "text-muted-foreground"
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </Button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: { duration: 0.2, ease: "easeIn" },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2">
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-sm text-muted-foreground leading-relaxed"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
