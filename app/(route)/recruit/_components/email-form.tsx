"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";
import axios from "axios";

interface EmailFormProps {
  userId: number | null;
}

const emailSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
});

type EmailFormType = z.infer<typeof emailSchema>;

const EmailForm = ({ userId }: EmailFormProps) => {
  const form = useForm<EmailFormType>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailFormType) => {
    if (!userId) {
      toast.error("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.post("/api/recruit/notification", {
        email: data.email,
      });
      console.log(response);
      if (response.data.success) {
        toast.success("이메일 알림이 등록되었습니다.");
        form.reset();
      }
    } catch (error) {
      console.error("이메일 등록 중 오류 발생:", error);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.error || "이메일 등록에 실패했습니다."
        );
      } else {
        toast.error("이메일 등록에 실패했습니다.");
      }
    }
  };

  return (
    <div className="text-center text-muted-foreground w-full text-2xl leading-10 flex items-center justify-center">
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        지금은 모집 기간이 아니에요.
        <br />
        모집 기간이 되면 메일로 알려드릴게요.
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative w-[80%] sm:w-[60%] h-[60px]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="이메일을 입력해주세요."
                      className="w-full h-full rounded-full pr-32"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="absolute top-1/2 right-[10px] -translate-y-1/2 h-[36px] px-3 sm:h-[44px] sm:px-6 rounded-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              알림 신청하기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EmailForm;
